import seguncasoLexer from "./generated/seguncasoLexer.js";
import seguncasoParser from "./generated/seguncasoParser.js";
import { CustomseguncasoVisitor } from "./CustomseguncasoVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
    let input;

        // Lee la entrada desde el archivo específicado, por ej. 'ejemplo1.txt'.
        input = fs.readFileSync('input_correcto_1.txt', 'utf8');

        // Proceso la entrada con el analizador para obtener el lexer
        let inputStream = CharStreams.fromString(input);
        let lexer = new seguncasoLexer(inputStream);
        const tokens = lexer.getAllTokens();
    
        //Mostrar la tabla de tokens y lexemas
        console.log("\nTabla de Tokens y Lexemas:");
        console.log("--------------------------------------------------");
        console.log("| Lexema         | Token                         |");
        console.log("--------------------------------------------------");
    
        // Recorrer todos los tokens generados por el lexer
        for (let token of tokens) {
            const tokenType = seguncasoLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
        }
        console.log("--------------------------------------------------"); 

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto.
    inputStream = CharStreams.fromString(input);
    lexer = new seguncasoLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new seguncasoParser(tokenStream);
    let tree = parser.prog();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nErrores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nLa entrada es válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomseguncasoVisitor();
        visitor.visit(tree);   
    }
}

// Ejecuta la función principal
main();
