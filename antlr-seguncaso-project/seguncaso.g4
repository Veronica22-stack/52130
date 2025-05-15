grammar seguncaso;

//PARSER 
prog: instruccion+;

instruccion: seleccion      #select
        ;

seleccion: 'segun' expresion 'hacer' '{' NEWLINE? (caso NEWLINE?)* caso_defecto? NEWLINE? '}' 'finsegun';

 caso: 'caso' constante ':' (sentencia)*;

 caso_defecto: 'defecto' ':' (sentencia)*;

 sentencia: (salida)+
          |terminar
          ;
salida: 'imprimir' '(' cadena ')' ';';

terminar: 'salir' ';';

expresion: constante;

constante: cadena
         | numero
         ;

cadena: '"' caracter* '"';

numero: (DIGITO)+;
    
caracter: LETRA
        | DIGITO
        |SIMBOLO
        ;

//REGLAS DEL LEXER
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
SEMICOLON : ';';
COLON : ':';
QUOTE: '"';
SEGUN : 'segun';
HACER : 'hacer';
CASO : 'caso';
DEFECTO: 'defecto'; 
FINSEGUN : 'finsegun';
SALIR : 'salir';
IMPRIMIR : 'imprimir';
LETRA : [a-zA-Z]+;
DIGITO : [0-9];
SIMBOLO : '.'
        | ','
        |'!'
        |'?'
        |':'
        |';'
        ;

//Ignora espacios, tabs y saltos de linea
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;