import antlr4 from 'antlr4';
import fs from 'fs';
import { CharStreams, CommonTokenStream } from 'antlr4';
import seguncasoLexer from './generated/seguncasoLexer.js';
import seguncasoParser from './generated/seguncasoParser.js';
import seguncasoLexeristener from './generated/seguncasoListener.js';

//Analisis lexico y sintactico

// Listener de errores personalizado
class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor(errorArray) {
    super();
    this.errors = errorArray;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    this.errors.push(`(Línea ${line}:${column}) Error: ${msg}`);
  }
}

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = CharStreams.fromString(input);
const lexer = new seguncasoLexer(chars);
const tokens = new CommonTokenStream(lexer);

// Capturar errores con mi CustomErrorListener
const lexingErrors = [];
const syntaxErrors = [];

const lexerErrorListener = new CustomErrorListener(lexingErrors);
const parserErrorListener = new CustomErrorListener(syntaxErrors);

lexer.removeErrorListeners();
lexer.addErrorListener(lexerErrorListener);

const parser = new seguncasoParser(tokens);
parser.buildParseTrees = true;

parser.removeErrorListeners();
parser.addErrorListener(parserErrorListener);

// Ejecutar análisis sintáctico
const tree = parser.prog();

// Resultado final
if (lexingErrors.length === 0 && syntaxErrors.length === 0) {
  console.log('\n La entrada es correcta: no hay errores.\n');
} else {
  console.log('\n Se encontraron errores en la entrada:\n');
  lexingErrors.forEach(e => console.error(e));
  syntaxErrors.forEach(e => console.error(e));
}

// Tabla de lexemas-tokens
console.log('\n Tabla de Lexemas - Tokens\n');

console.log('+------------------------+------------------------+');
console.log('| Lexema                 | Token                  |');
console.log('+------------------------+------------------------+');

const tokenTypeMap = {};
seguncasoLexer.symbolicNames.forEach((name, index) => {
  if (name) tokenTypeMap[index] = name;
});

tokens.fill();
tokens.tokens.forEach(token => {
  if (token.type !== -1) {
    const tokenName = seguncasoLexer.symbolicNames[token.type] || `Token_${token.type}`;
    const lexema = token.text.replace(/\n/g, '\\n').replace(/\t/g, '\\t');
    const lexemaCol = lexema.padEnd(23).slice(0, 23);
    const tokenCol = tokenName.padEnd(23).slice(0, 23);
    console.log(`| ${lexemaCol} | ${tokenCol} |`);
  }
});

console.log('+------------------------+------------------------+');

//  Árbol de análisis sintáctico
const derivationTree = tree.toStringTree(parser.ruleNames);
  console.log("\n Árbol de derivación:");
  console.log(derivationTree);



