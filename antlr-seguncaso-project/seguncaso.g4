grammar seguncaso;

//parser
prog: instruccion+ EOF;

instruccion: seleccion;

seleccion: 'segun' expresion 'hacer' bloque 'finsegun';

bloque: '{' (caso)+ caso_defecto? '}';

caso: 'caso' constante ':' sentencia+;

caso_defecto: 'defecto' ':' sentencia+;

sentencia: salida
         | terminar
         ;

salida: 'imprimir' '(' cadena ')' ';';

terminar: 'salir' ';';

expresion: constante;

constante: cadena
         | numero
         ;

cadena: '"' caracter* '"';

numero: NUM;

caracter: ID | NUM | SIMBOLO;

//reglas lexer
SEGUN : 'segun';
HACER : 'hacer';
CASO : 'caso';
DEFECTO : 'defecto';
FINSEGUN : 'finsegun';
SALIR : 'salir';
IMPRIMIR : 'imprimir';

LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
SEMICOLON : ';';
COLON : ':';
COMILLA : '"';

SIMBOLO : [.,!¡?] ;
NUM: [0-9]+ ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
WS: [ \t\n\r\f]+ -> skip ;