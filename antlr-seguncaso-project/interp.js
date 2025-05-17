import antlr4 from 'antlr4';
import fs from 'fs';
import vm from 'node:vm';

import seguncasoLexer from './generated/seguncasoLexer.js';
import seguncasoParser from './generated/seguncasoParser.js';
import seguncasoListener from './generated/seguncasoListener.js';

//Interpretacion
// Traducción del código fuente a JavaScript

// Leer y preparar entrada
const input = fs.readFileSync('antlr-seguncaso-project/input.txt', 'utf8');
const chars = antlr4.CharStreams.fromString(input);
const lexer = new seguncasoLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new seguncasoParser(tokens);
parser.buildParseTrees = true;
const tree = parser.prog();

// Interprete: Traducción a JavaScript
class InterpretadorListener extends seguncasoListener {
  constructor() {
    super();
    this.codigoJS = '';
    this.indent = '';
  }

  enterSeleccion(ctx) {
    const expresion = ctx.expresion().getText();
    this.codigoJS += `${this.indent}switch (${expresion}) {\n`;
    this.indent += '  ';
  }

  exitSeleccion(ctx) {
    this.indent = this.indent.slice(0, -2);
    this.codigoJS += `${this.indent}}\n`;
  }

  enterCaso(ctx) {
    const valor = ctx.constante().getText();
    this.codigoJS += `${this.indent}case ${valor}:\n`;
    this.indent += '  ';
  }

  exitCaso(ctx) {
    this.codigoJS += `${this.indent}break;\n`;
    this.indent = this.indent.slice(0, -2);
  }

  enterCaso_defecto(ctx) {
    this.codigoJS += `${this.indent}default:\n`;
    this.indent += '  ';
  }

  exitCaso_defecto(ctx) {
    this.codigoJS += `${this.indent}break;\n`;
    this.indent = this.indent.slice(0, -2);
  }

  enterSalida(ctx) {
    const texto = ctx.cadena().getText().slice(1, -1); // Quitar comillas
    this.codigoJS += `${this.indent}console.log("${texto}");\n`;
  }

  enterTerminar(ctx) {
    this.codigoJS += `${this.indent}process.exit(0);\n`;
  }
}

// Recorrer el árbol y generar JS
const listener = new InterpretadorListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

// Mostrar y ejecutar el código generado
console.log('\ Código JavaScript generado:\n');
console.log(listener.codigoJS);

try {
  vm.runInNewContext(listener.codigoJS, { console, process });
} catch (e) {
  console.error(' Error al ejecutar el código generado:', e.message);
}

export function interpretar(tree) {
  console.log('\n Interpretando...\n');
  const listener = new InterpretarListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  if (listener.salir) {
    console.log("\n Ejecución finalizada por 'salir'.");
  }
}
