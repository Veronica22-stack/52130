grammar seguncaso;

//Gramatica
prog: instruccion+;

instruccion: seleccion      #select
        ;

seleccion: 'segun' expresion 'hacer' '{'NEWLINE? (caso NEWLINE?)* caso_defecto? NEWLINE? '}' 'finsegun';

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

//Lexemas
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
SEMICOLON : ';';
COLON : ':';
QUOTE: '"';
LETRA : [a-zA-Z]+;
DIGITO : [0-9];
SIMBOLO : '.'
        | ','
        |'!'
        |'?'
        |':'
        |';'
        ;
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;