// Generated from c:/Users/HP/Documents/VERO/Facultad/2do a�o/primer semestre/sintaxis/ANALIZADOR/SEGUNCASO/antlr-seguncaso-project/seguncaso.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import seguncasoListener from './seguncasoListener.js';
import seguncasoVisitor from './seguncasoVisitor.js';

const serializedATN = [4,1,19,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,2,1,
2,3,2,43,8,2,5,2,45,8,2,10,2,12,2,48,9,2,1,2,3,2,51,8,2,1,2,3,2,54,8,2,1,
2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,4,1,4,1,4,5,4,71,
8,4,10,4,12,4,74,9,4,1,5,4,5,77,8,5,11,5,12,5,78,1,5,3,5,82,8,5,1,6,1,6,
1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,3,9,97,8,9,1,10,1,10,5,10,101,
8,10,10,10,12,10,104,9,10,1,10,1,10,1,11,4,11,109,8,11,11,11,12,11,110,1,
12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,1,1,0,15,17,114,
0,27,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,58,1,0,0,0,8,67,1,0,0,0,10,81,1,
0,0,0,12,83,1,0,0,0,14,89,1,0,0,0,16,92,1,0,0,0,18,96,1,0,0,0,20,98,1,0,
0,0,22,108,1,0,0,0,24,112,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,
0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,32,3,4,2,0,32,3,1,0,0,0,
33,34,5,1,0,0,34,35,3,16,8,0,35,36,5,2,0,0,36,38,5,10,0,0,37,39,5,18,0,0,
38,37,1,0,0,0,38,39,1,0,0,0,39,46,1,0,0,0,40,42,3,6,3,0,41,43,5,18,0,0,42,
41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,40,1,0,0,0,45,48,1,0,0,0,46,44,
1,0,0,0,46,47,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,49,51,3,8,4,0,50,49,1,
0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,54,5,18,0,0,53,52,1,0,0,0,53,54,1,0,
0,0,54,55,1,0,0,0,55,56,5,11,0,0,56,57,5,3,0,0,57,5,1,0,0,0,58,59,5,4,0,
0,59,60,3,18,9,0,60,64,5,13,0,0,61,63,3,10,5,0,62,61,1,0,0,0,63,66,1,0,0,
0,64,62,1,0,0,0,64,65,1,0,0,0,65,7,1,0,0,0,66,64,1,0,0,0,67,68,5,5,0,0,68,
72,5,13,0,0,69,71,3,10,5,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,
73,1,0,0,0,73,9,1,0,0,0,74,72,1,0,0,0,75,77,3,12,6,0,76,75,1,0,0,0,77,78,
1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,82,1,0,0,0,80,82,3,14,7,0,81,76,1,
0,0,0,81,80,1,0,0,0,82,11,1,0,0,0,83,84,5,6,0,0,84,85,5,8,0,0,85,86,3,20,
10,0,86,87,5,9,0,0,87,88,5,12,0,0,88,13,1,0,0,0,89,90,5,7,0,0,90,91,5,12,
0,0,91,15,1,0,0,0,92,93,3,18,9,0,93,17,1,0,0,0,94,97,3,20,10,0,95,97,3,22,
11,0,96,94,1,0,0,0,96,95,1,0,0,0,97,19,1,0,0,0,98,102,5,14,0,0,99,101,3,
24,12,0,100,99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,
105,1,0,0,0,104,102,1,0,0,0,105,106,5,14,0,0,106,21,1,0,0,0,107,109,5,16,
0,0,108,107,1,0,0,0,109,110,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,
23,1,0,0,0,112,113,7,0,0,0,113,25,1,0,0,0,13,29,38,42,46,50,53,64,72,78,
81,96,102,110];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class seguncasoParser extends antlr4.Parser {

    static grammarFileName = "seguncaso.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "';'", "':'", 
                            "'\"'", "'segun'", "'hacer'", "'caso'", "'defecto'", 
                            "'finsegun'", "'salir'", "'imprimir'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "SEMICOLON", "COLON", "QUOTE", "SEGUN", "HACER", 
                             "CASO", "DEFECTO", "FINSEGUN", "SALIR", "IMPRIMIR", 
                             "LETRA", "DIGITO", "SIMBOLO", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "instruccion", "seleccion", "caso", "caso_defecto", 
                         "sentencia", "salida", "terminar", "expresion", 
                         "constante", "cadena", "numero", "caracter" ];

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
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.instruccion();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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
	        localctx = new SelectContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(seguncasoParser.T__0);
	        this.state = 34;
	        this.expresion();
	        this.state = 35;
	        this.match(seguncasoParser.T__1);
	        this.state = 36;
	        this.match(seguncasoParser.LBRACE);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 37;
	            this.match(seguncasoParser.NEWLINE);

	        }
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 40;
	            this.caso();
	            this.state = 42;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 41;
	                this.match(seguncasoParser.NEWLINE);

	            }
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 49;
	            this.caso_defecto();
	        }

	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 52;
	            this.match(seguncasoParser.NEWLINE);
	        }

	        this.state = 55;
	        this.match(seguncasoParser.RBRACE);
	        this.state = 56;
	        this.match(seguncasoParser.T__2);
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
	    this.enterRule(localctx, 6, seguncasoParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(seguncasoParser.T__3);
	        this.state = 59;
	        this.constante();
	        this.state = 60;
	        this.match(seguncasoParser.COLON);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 61;
	            this.sentencia();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, seguncasoParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(seguncasoParser.T__4);
	        this.state = 68;
	        this.match(seguncasoParser.COLON);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===7) {
	            this.state = 69;
	            this.sentencia();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, seguncasoParser.RULE_sentencia);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 75;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 78; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
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
	    this.enterRule(localctx, 12, seguncasoParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(seguncasoParser.T__5);
	        this.state = 84;
	        this.match(seguncasoParser.LPAREN);
	        this.state = 85;
	        this.cadena();
	        this.state = 86;
	        this.match(seguncasoParser.RPAREN);
	        this.state = 87;
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
	    this.enterRule(localctx, 14, seguncasoParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(seguncasoParser.T__6);
	        this.state = 90;
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
	    this.enterRule(localctx, 16, seguncasoParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
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
	    this.enterRule(localctx, 18, seguncasoParser.RULE_constante);
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.cadena();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
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
	    this.enterRule(localctx, 20, seguncasoParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(seguncasoParser.QUOTE);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0)) {
	            this.state = 99;
	            this.caracter();
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this.match(seguncasoParser.QUOTE);
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
	    this.enterRule(localctx, 22, seguncasoParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 107;
	            this.match(seguncasoParser.DIGITO);
	            this.state = 110; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
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
	    this.enterRule(localctx, 24, seguncasoParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
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
seguncasoParser.T__0 = 1;
seguncasoParser.T__1 = 2;
seguncasoParser.T__2 = 3;
seguncasoParser.T__3 = 4;
seguncasoParser.T__4 = 5;
seguncasoParser.T__5 = 6;
seguncasoParser.T__6 = 7;
seguncasoParser.LPAREN = 8;
seguncasoParser.RPAREN = 9;
seguncasoParser.LBRACE = 10;
seguncasoParser.RBRACE = 11;
seguncasoParser.SEMICOLON = 12;
seguncasoParser.COLON = 13;
seguncasoParser.QUOTE = 14;
seguncasoParser.LETRA = 15;
seguncasoParser.DIGITO = 16;
seguncasoParser.SIMBOLO = 17;
seguncasoParser.NEWLINE = 18;
seguncasoParser.WS = 19;

seguncasoParser.RULE_prog = 0;
seguncasoParser.RULE_instruccion = 1;
seguncasoParser.RULE_seleccion = 2;
seguncasoParser.RULE_caso = 3;
seguncasoParser.RULE_caso_defecto = 4;
seguncasoParser.RULE_sentencia = 5;
seguncasoParser.RULE_salida = 6;
seguncasoParser.RULE_terminar = 7;
seguncasoParser.RULE_expresion = 8;
seguncasoParser.RULE_constante = 9;
seguncasoParser.RULE_cadena = 10;
seguncasoParser.RULE_numero = 11;
seguncasoParser.RULE_caracter = 12;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.enterSelect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof seguncasoListener ) {
	        listener.exitSelect(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof seguncasoVisitor ) {
	        return visitor.visitSelect(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

seguncasoParser.SelectContext = SelectContext;

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

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	LBRACE() {
	    return this.getToken(seguncasoParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(seguncasoParser.RBRACE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(seguncasoParser.NEWLINE);
	    } else {
	        return this.getToken(seguncasoParser.NEWLINE, i);
	    }
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

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
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

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(seguncasoParser.QUOTE);
	    } else {
	        return this.getToken(seguncasoParser.QUOTE, i);
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

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(seguncasoParser.DIGITO);
	    } else {
	        return this.getToken(seguncasoParser.DIGITO, i);
	    }
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

	LETRA() {
	    return this.getToken(seguncasoParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(seguncasoParser.DIGITO, 0);
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
