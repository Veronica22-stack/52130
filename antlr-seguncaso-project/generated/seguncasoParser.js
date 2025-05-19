// Generated from c:/Users/HP/Documents/antlr-seguncaso-project/seguncaso.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import seguncasoListener from './seguncasoListener.js';
import seguncasoVisitor from './seguncasoVisitor.js';

const serializedATN = [4,1,18,102,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,4,0,30,8,0,11,0,12,0,31,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,4,3,46,8,3,11,3,12,3,47,1,3,3,3,51,8,3,1,3,1,3,1,4,1,4,1,4,
1,4,4,4,59,8,4,11,4,12,4,60,1,5,1,5,1,5,4,5,66,8,5,11,5,12,5,67,1,6,1,6,
3,6,72,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,3,10,87,
8,10,1,11,1,11,5,11,91,8,11,10,11,12,11,94,9,11,1,11,1,11,1,12,1,12,1,13,
1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,15,17,95,0,
29,1,0,0,0,2,35,1,0,0,0,4,37,1,0,0,0,6,43,1,0,0,0,8,54,1,0,0,0,10,62,1,0,
0,0,12,71,1,0,0,0,14,73,1,0,0,0,16,79,1,0,0,0,18,82,1,0,0,0,20,86,1,0,0,
0,22,88,1,0,0,0,24,97,1,0,0,0,26,99,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,
30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,34,
1,1,0,0,0,35,36,3,4,2,0,36,3,1,0,0,0,37,38,5,1,0,0,38,39,3,18,9,0,39,40,
5,2,0,0,40,41,3,6,3,0,41,42,5,5,0,0,42,5,1,0,0,0,43,45,5,10,0,0,44,46,3,
8,4,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,
0,0,49,51,3,10,5,0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,11,
0,0,53,7,1,0,0,0,54,55,5,3,0,0,55,56,3,20,10,0,56,58,5,13,0,0,57,59,3,12,
6,0,58,57,1,0,0,0,59,60,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,9,1,0,0,0,
62,63,5,4,0,0,63,65,5,13,0,0,64,66,3,12,6,0,65,64,1,0,0,0,66,67,1,0,0,0,
67,65,1,0,0,0,67,68,1,0,0,0,68,11,1,0,0,0,69,72,3,14,7,0,70,72,3,16,8,0,
71,69,1,0,0,0,71,70,1,0,0,0,72,13,1,0,0,0,73,74,5,7,0,0,74,75,5,8,0,0,75,
76,3,22,11,0,76,77,5,9,0,0,77,78,5,12,0,0,78,15,1,0,0,0,79,80,5,6,0,0,80,
81,5,12,0,0,81,17,1,0,0,0,82,83,3,20,10,0,83,19,1,0,0,0,84,87,3,22,11,0,
85,87,3,24,12,0,86,84,1,0,0,0,86,85,1,0,0,0,87,21,1,0,0,0,88,92,5,14,0,0,
89,91,3,26,13,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,
93,95,1,0,0,0,94,92,1,0,0,0,95,96,5,14,0,0,96,23,1,0,0,0,97,98,5,16,0,0,
98,25,1,0,0,0,99,100,7,0,0,0,100,27,1,0,0,0,8,31,47,50,60,67,71,86,92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class seguncasoParser extends antlr4.Parser {

    static grammarFileName = "seguncaso.g4";
    static literalNames = [ null, "'segun'", "'hacer'", "'caso'", "'defecto'", 
                            "'finsegun'", "'salir'", "'imprimir'", "'('", 
                            "')'", "'{'", "'}'", "';'", "':'", "'\"'" ];
    static symbolicNames = [ null, "SEGUN", "HACER", "CASO", "DEFECTO", 
                             "FINSEGUN", "SALIR", "IMPRIMIR", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", 
                             "COLON", "COMILLA", "SIMBOLO", "NUM", "ID", 
                             "WS" ];
    static ruleNames = [ "prog", "instruccion", "seleccion", "bloque", "caso", 
                         "caso_defecto", "sentencia", "salida", "terminar", 
                         "expresion", "constante", "cadena", "numero", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = seguncasoParser.ruleNames;
        this.literalNames = seguncasoParser.literalNames;
        this.symbolicNames = seguncasoParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, seguncasoParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.instruccion();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 33;
	        this.match(seguncasoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, seguncasoParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, seguncasoParser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(seguncasoParser.SEGUN);
	        this.state = 38;
	        this.expresion();
	        this.state = 39;
	        this.match(seguncasoParser.HACER);
	        this.state = 40;
	        this.bloque();
	        this.state = 41;
	        this.match(seguncasoParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, seguncasoParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(seguncasoParser.LBRACE);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this.caso();
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 49;
	            this.caso_defecto();
	        }

	        this.state = 52;
	        this.match(seguncasoParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, seguncasoParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(seguncasoParser.CASO);
	        this.state = 55;
	        this.constante();
	        this.state = 56;
	        this.match(seguncasoParser.COLON);
	        this.state = 58; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 57;
	            this.sentencia();
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, seguncasoParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(seguncasoParser.DEFECTO);
	        this.state = 63;
	        this.match(seguncasoParser.COLON);
	        this.state = 65; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 64;
	            this.sentencia();
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, seguncasoParser.RULE_sentencia);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.salida();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, seguncasoParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(seguncasoParser.IMPRIMIR);
	        this.state = 74;
	        this.match(seguncasoParser.LPAREN);
	        this.state = 75;
	        this.cadena();
	        this.state = 76;
	        this.match(seguncasoParser.RPAREN);
	        this.state = 77;
	        this.match(seguncasoParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, seguncasoParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(seguncasoParser.SALIR);
	        this.state = 80;
	        this.match(seguncasoParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, seguncasoParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, seguncasoParser.RULE_constante);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.cadena();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, seguncasoParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(seguncasoParser.COMILLA);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0)) {
	            this.state = 89;
	            this.caracter();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this.match(seguncasoParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, seguncasoParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(seguncasoParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, seguncasoParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

seguncasoParser.EOF = antlr4.Token.EOF;
seguncasoParser.SEGUN = 1;
seguncasoParser.HACER = 2;
seguncasoParser.CASO = 3;
seguncasoParser.DEFECTO = 4;
seguncasoParser.FINSEGUN = 5;
seguncasoParser.SALIR = 6;
seguncasoParser.IMPRIMIR = 7;
seguncasoParser.LPAREN = 8;
seguncasoParser.RPAREN = 9;
seguncasoParser.LBRACE = 10;
seguncasoParser.RBRACE = 11;
seguncasoParser.SEMICOLON = 12;
seguncasoParser.COLON = 13;
seguncasoParser.COMILLA = 14;
seguncasoParser.SIMBOLO = 15;
seguncasoParser.NUM = 16;
seguncasoParser.ID = 17;
seguncasoParser.WS = 18;

seguncasoParser.RULE_prog = 0;
seguncasoParser.RULE_instruccion = 1;
seguncasoParser.RULE_seleccion = 2;
seguncasoParser.RULE_bloque = 3;
seguncasoParser.RULE_caso = 4;
seguncasoParser.RULE_caso_defecto = 5;
seguncasoParser.RULE_sentencia = 6;
seguncasoParser.RULE_salida = 7;
seguncasoParser.RULE_terminar = 8;
seguncasoParser.RULE_expresion = 9;
seguncasoParser.RULE_constante = 10;
seguncasoParser.RULE_cadena = 11;
seguncasoParser.RULE_numero = 12;
seguncasoParser.RULE_caracter = 13;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(seguncasoParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_seleccion;
    }

	SEGUN() {
	    return this.getToken(seguncasoParser.SEGUN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	HACER() {
	    return this.getToken(seguncasoParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FINSEGUN() {
	    return this.getToken(seguncasoParser.FINSEGUN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_bloque;
    }

	LBRACE() {
	    return this.getToken(seguncasoParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(seguncasoParser.RBRACE, 0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_caso;
    }

	CASO() {
	    return this.getToken(seguncasoParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	COLON() {
	    return this.getToken(seguncasoParser.COLON, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(seguncasoParser.DEFECTO, 0);
	};

	COLON() {
	    return this.getToken(seguncasoParser.COLON, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitCaso_defecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitCaso_defecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(seguncasoParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(seguncasoParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(seguncasoParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(seguncasoParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(seguncasoParser.SALIR, 0);
	};

	SEMICOLON() {
	    return this.getToken(seguncasoParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_constante;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(seguncasoParser.COMILLA);
	    } else {
	        return this.getToken(seguncasoParser.COMILLA, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_numero;
    }

	NUM() {
	    return this.getToken(seguncasoParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = seguncasoParser.RULE_caracter;
    }

	ID() {
	    return this.getToken(seguncasoParser.ID, 0);
	};

	NUM() {
	    return this.getToken(seguncasoParser.NUM, 0);
	};

	SIMBOLO() {
	    return this.getToken(seguncasoParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




seguncasoParser.ProgContext = ProgContext; 
seguncasoParser.InstruccionContext = InstruccionContext; 
seguncasoParser.SeleccionContext = SeleccionContext; 
seguncasoParser.BloqueContext = BloqueContext; 
seguncasoParser.CasoContext = CasoContext; 
seguncasoParser.Caso_defectoContext = Caso_defectoContext; 
seguncasoParser.SentenciaContext = SentenciaContext; 
seguncasoParser.SalidaContext = SalidaContext; 
seguncasoParser.TerminarContext = TerminarContext; 
seguncasoParser.ExpresionContext = ExpresionContext; 
seguncasoParser.ConstanteContext = ConstanteContext; 
seguncasoParser.CadenaContext = CadenaContext; 
seguncasoParser.NumeroContext = NumeroContext; 
seguncasoParser.CaracterContext = CaracterContext; 
