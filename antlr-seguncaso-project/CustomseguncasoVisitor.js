import { Parser } from "antlr4";
import seguncasoVisitor from "./generated/seguncasoVisitor.js";
import seguncasoParser from "./generated/seguncasoParser.js";

export class CustomseguncasoVisitor extends seguncasoVisitor {
  constructor() {
    super();
    this.salir = false;// Bandera para detener la ejecución si se encuentra una sentencia "salir"
  }

  visitProg(ctx) {
    for (let i = 0; i < ctx.instruccion().length && !this.salir; i++) {
      this.visit(ctx.instruccion(i));
    }
  }

  // Visita una instrucción tipo "select", llama a la regla "seleccion"
  visitSelect(ctx) {
    return this.visit(ctx.seleccion());
  }

  // Procesa la selección: evalúa la expresión y ejecuta el bloque del caso correspondiente
  visitSeleccion(ctx) {
    const valor = this.visit(ctx.expresion());
    const casos = ctx.caso();

    let encontrado = false;

    for (const c of casos) {
      const constante = this.visit(c.constante());
      if (valor === constante) {
        this.visit(c);
        encontrado = true;
        break;
      }
    }

    if (!encontrado && ctx.caso_defecto()) {
      this.visit(ctx.caso_defecto());
    }
  }

  // Procesa un caso específico: ejecuta sus sentencias
  visitCaso(ctx) {
    for (const s of ctx.sentencia()) {
      this.visit(s);
      if (this.salir) break;
    }
  }

  // Procesa el bloque por defecto (caso_defecto)
  visitCaso_defecto(ctx) {
    for (const s of ctx.sentencia()) {
      this.visit(s);
      if (this.salir) break;
    }
  }

  // Procesa una sentencia
  visitSentencia(ctx) {
    for (const salida of ctx.salida()) {
      this.visit(salida);
    }
    if (ctx.terminar()) {
      this.visit(ctx.terminar());
    }
  }

  // Procesa la salida por consola: imprimir("algo");
  visitSalida(ctx) {
    const texto = this.visit(ctx.cadena());
    console.log(texto);
  }

  // Procesa la instrucción 'salir'
  visitTerminar(ctx) {
    this.salir = true;
  }

  // Procesa una expresión 
  visitExpresion(ctx) {
    return this.visit(ctx.constante());
  }

  // Procesa una constante
  visitConstante(ctx) {
    if (ctx.cadena()) return this.visit(ctx.cadena());
    if (ctx.numero()) return parseInt(ctx.numero().getText());
    return null;
  }

  // Procesa una cadena
  visitCadena(ctx) {
    const texto = ctx.caracter().map(c => c.getText()).join("");
    return texto;
  }
}