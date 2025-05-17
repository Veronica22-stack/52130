// Generated from seguncaso.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class seguncasoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SEGUN=1, HACER=2, CASO=3, DEFECTO=4, FINSEGUN=5, SALIR=6, IMPRIMIR=7, 
		LPAREN=8, RPAREN=9, LBRACE=10, RBRACE=11, SEMICOLON=12, COLON=13, COMILLA=14, 
		SIMBOLO=15, NUM=16, ID=17, WS=18;
	public static final int
		RULE_prog = 0, RULE_instruccion = 1, RULE_seleccion = 2, RULE_bloque = 3, 
		RULE_caso = 4, RULE_caso_defecto = 5, RULE_sentencia = 6, RULE_salida = 7, 
		RULE_terminar = 8, RULE_expresion = 9, RULE_constante = 10, RULE_cadena = 11, 
		RULE_numero = 12, RULE_caracter = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "instruccion", "seleccion", "bloque", "caso", "caso_defecto", 
			"sentencia", "salida", "terminar", "expresion", "constante", "cadena", 
			"numero", "caracter"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'segun'", "'hacer'", "'caso'", "'defecto'", "'finsegun'", "'salir'", 
			"'imprimir'", "'('", "')'", "'{'", "'}'", "';'", "':'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SEGUN", "HACER", "CASO", "DEFECTO", "FINSEGUN", "SALIR", "IMPRIMIR", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", "COLON", "COMILLA", 
			"SIMBOLO", "NUM", "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "seguncaso.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public seguncasoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(seguncasoParser.EOF, 0); }
		public List<InstruccionContext> instruccion() {
			return getRuleContexts(InstruccionContext.class);
		}
		public InstruccionContext instruccion(int i) {
			return getRuleContext(InstruccionContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(28);
				instruccion();
				}
				}
				setState(31); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SEGUN );
			setState(33);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public SeleccionContext seleccion() {
			return getRuleContext(SeleccionContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterInstruccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitInstruccion(this);
		}
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instruccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			seleccion();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeleccionContext extends ParserRuleContext {
		public TerminalNode SEGUN() { return getToken(seguncasoParser.SEGUN, 0); }
		public ExpresionContext expresion() {
			return getRuleContext(ExpresionContext.class,0);
		}
		public TerminalNode HACER() { return getToken(seguncasoParser.HACER, 0); }
		public BloqueContext bloque() {
			return getRuleContext(BloqueContext.class,0);
		}
		public TerminalNode FINSEGUN() { return getToken(seguncasoParser.FINSEGUN, 0); }
		public SeleccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seleccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterSeleccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitSeleccion(this);
		}
	}

	public final SeleccionContext seleccion() throws RecognitionException {
		SeleccionContext _localctx = new SeleccionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_seleccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(SEGUN);
			setState(38);
			expresion();
			setState(39);
			match(HACER);
			setState(40);
			bloque();
			setState(41);
			match(FINSEGUN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BloqueContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(seguncasoParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(seguncasoParser.RBRACE, 0); }
		public List<CasoContext> caso() {
			return getRuleContexts(CasoContext.class);
		}
		public CasoContext caso(int i) {
			return getRuleContext(CasoContext.class,i);
		}
		public Caso_defectoContext caso_defecto() {
			return getRuleContext(Caso_defectoContext.class,0);
		}
		public BloqueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bloque; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterBloque(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitBloque(this);
		}
	}

	public final BloqueContext bloque() throws RecognitionException {
		BloqueContext _localctx = new BloqueContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_bloque);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(LBRACE);
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CASO) {
				{
				{
				setState(44);
				caso();
				}
				}
				setState(49);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DEFECTO) {
				{
				setState(50);
				caso_defecto();
				}
			}

			setState(53);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CasoContext extends ParserRuleContext {
		public TerminalNode CASO() { return getToken(seguncasoParser.CASO, 0); }
		public ConstanteContext constante() {
			return getRuleContext(ConstanteContext.class,0);
		}
		public TerminalNode COLON() { return getToken(seguncasoParser.COLON, 0); }
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public CasoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caso; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterCaso(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitCaso(this);
		}
	}

	public final CasoContext caso() throws RecognitionException {
		CasoContext _localctx = new CasoContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_caso);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(CASO);
			setState(56);
			constante();
			setState(57);
			match(COLON);
			setState(59); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(58);
				sentencia();
				}
				}
				setState(61); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SALIR || _la==IMPRIMIR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Caso_defectoContext extends ParserRuleContext {
		public TerminalNode DEFECTO() { return getToken(seguncasoParser.DEFECTO, 0); }
		public TerminalNode COLON() { return getToken(seguncasoParser.COLON, 0); }
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public Caso_defectoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caso_defecto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterCaso_defecto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitCaso_defecto(this);
		}
	}

	public final Caso_defectoContext caso_defecto() throws RecognitionException {
		Caso_defectoContext _localctx = new Caso_defectoContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_caso_defecto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(DEFECTO);
			setState(64);
			match(COLON);
			setState(66); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(65);
				sentencia();
				}
				}
				setState(68); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==SALIR || _la==IMPRIMIR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public SalidaContext salida() {
			return getRuleContext(SalidaContext.class,0);
		}
		public TerminarContext terminar() {
			return getRuleContext(TerminarContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterSentencia(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitSentencia(this);
		}
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_sentencia);
		try {
			setState(72);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPRIMIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(70);
				salida();
				}
				break;
			case SALIR:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				terminar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SalidaContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(seguncasoParser.IMPRIMIR, 0); }
		public TerminalNode LPAREN() { return getToken(seguncasoParser.LPAREN, 0); }
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(seguncasoParser.RPAREN, 0); }
		public TerminalNode SEMICOLON() { return getToken(seguncasoParser.SEMICOLON, 0); }
		public SalidaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_salida; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterSalida(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitSalida(this);
		}
	}

	public final SalidaContext salida() throws RecognitionException {
		SalidaContext _localctx = new SalidaContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_salida);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(IMPRIMIR);
			setState(75);
			match(LPAREN);
			setState(76);
			cadena();
			setState(77);
			match(RPAREN);
			setState(78);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminarContext extends ParserRuleContext {
		public TerminalNode SALIR() { return getToken(seguncasoParser.SALIR, 0); }
		public TerminalNode SEMICOLON() { return getToken(seguncasoParser.SEMICOLON, 0); }
		public TerminarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terminar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterTerminar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitTerminar(this);
		}
	}

	public final TerminarContext terminar() throws RecognitionException {
		TerminarContext _localctx = new TerminarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_terminar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			match(SALIR);
			setState(81);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionContext extends ParserRuleContext {
		public ConstanteContext constante() {
			return getRuleContext(ConstanteContext.class,0);
		}
		public ExpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterExpresion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitExpresion(this);
		}
	}

	public final ExpresionContext expresion() throws RecognitionException {
		ExpresionContext _localctx = new ExpresionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			constante();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstanteContext extends ParserRuleContext {
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public ConstanteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constante; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterConstante(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitConstante(this);
		}
	}

	public final ConstanteContext constante() throws RecognitionException {
		ConstanteContext _localctx = new ConstanteContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_constante);
		try {
			setState(87);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COMILLA:
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				cadena();
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				numero();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public List<TerminalNode> COMILLA() { return getTokens(seguncasoParser.COMILLA); }
		public TerminalNode COMILLA(int i) {
			return getToken(seguncasoParser.COMILLA, i);
		}
		public List<CaracterContext> caracter() {
			return getRuleContexts(CaracterContext.class);
		}
		public CaracterContext caracter(int i) {
			return getRuleContext(CaracterContext.class,i);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_cadena);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(COMILLA);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 229376L) != 0)) {
				{
				{
				setState(90);
				caracter();
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(96);
			match(COMILLA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public TerminalNode NUM() { return getToken(seguncasoParser.NUM, 0); }
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterNumero(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitNumero(this);
		}
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_numero);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			match(NUM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(seguncasoParser.ID, 0); }
		public TerminalNode NUM() { return getToken(seguncasoParser.NUM, 0); }
		public TerminalNode SIMBOLO() { return getToken(seguncasoParser.SIMBOLO, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).enterCaracter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof seguncasoListener ) ((seguncasoListener)listener).exitCaracter(this);
		}
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 229376L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0012g\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0004\u0000\u001e\b\u0000\u000b"+
		"\u0000\f\u0000\u001f\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0005\u0003.\b\u0003\n\u0003\f\u00031\t\u0003\u0001"+
		"\u0003\u0003\u00034\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0004\u0004<\b\u0004\u000b\u0004\f\u0004"+
		"=\u0001\u0005\u0001\u0005\u0001\u0005\u0004\u0005C\b\u0005\u000b\u0005"+
		"\f\u0005D\u0001\u0006\u0001\u0006\u0003\u0006I\b\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0003\nX\b\n\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\\\b\u000b\n\u000b\f\u000b_\t\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0000\u0000\u000e\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0000"+
		"\u0001\u0001\u0000\u000f\u0011`\u0000\u001d\u0001\u0000\u0000\u0000\u0002"+
		"#\u0001\u0000\u0000\u0000\u0004%\u0001\u0000\u0000\u0000\u0006+\u0001"+
		"\u0000\u0000\u0000\b7\u0001\u0000\u0000\u0000\n?\u0001\u0000\u0000\u0000"+
		"\fH\u0001\u0000\u0000\u0000\u000eJ\u0001\u0000\u0000\u0000\u0010P\u0001"+
		"\u0000\u0000\u0000\u0012S\u0001\u0000\u0000\u0000\u0014W\u0001\u0000\u0000"+
		"\u0000\u0016Y\u0001\u0000\u0000\u0000\u0018b\u0001\u0000\u0000\u0000\u001a"+
		"d\u0001\u0000\u0000\u0000\u001c\u001e\u0003\u0002\u0001\u0000\u001d\u001c"+
		"\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f\u001d"+
		"\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 !\u0001\u0000"+
		"\u0000\u0000!\"\u0005\u0000\u0000\u0001\"\u0001\u0001\u0000\u0000\u0000"+
		"#$\u0003\u0004\u0002\u0000$\u0003\u0001\u0000\u0000\u0000%&\u0005\u0001"+
		"\u0000\u0000&\'\u0003\u0012\t\u0000\'(\u0005\u0002\u0000\u0000()\u0003"+
		"\u0006\u0003\u0000)*\u0005\u0005\u0000\u0000*\u0005\u0001\u0000\u0000"+
		"\u0000+/\u0005\n\u0000\u0000,.\u0003\b\u0004\u0000-,\u0001\u0000\u0000"+
		"\u0000.1\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000/0\u0001\u0000"+
		"\u0000\u000003\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u000024\u0003"+
		"\n\u0005\u000032\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u000045\u0001"+
		"\u0000\u0000\u000056\u0005\u000b\u0000\u00006\u0007\u0001\u0000\u0000"+
		"\u000078\u0005\u0003\u0000\u000089\u0003\u0014\n\u00009;\u0005\r\u0000"+
		"\u0000:<\u0003\f\u0006\u0000;:\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000"+
		"\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>\t\u0001\u0000"+
		"\u0000\u0000?@\u0005\u0004\u0000\u0000@B\u0005\r\u0000\u0000AC\u0003\f"+
		"\u0006\u0000BA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001"+
		"\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000E\u000b\u0001\u0000\u0000"+
		"\u0000FI\u0003\u000e\u0007\u0000GI\u0003\u0010\b\u0000HF\u0001\u0000\u0000"+
		"\u0000HG\u0001\u0000\u0000\u0000I\r\u0001\u0000\u0000\u0000JK\u0005\u0007"+
		"\u0000\u0000KL\u0005\b\u0000\u0000LM\u0003\u0016\u000b\u0000MN\u0005\t"+
		"\u0000\u0000NO\u0005\f\u0000\u0000O\u000f\u0001\u0000\u0000\u0000PQ\u0005"+
		"\u0006\u0000\u0000QR\u0005\f\u0000\u0000R\u0011\u0001\u0000\u0000\u0000"+
		"ST\u0003\u0014\n\u0000T\u0013\u0001\u0000\u0000\u0000UX\u0003\u0016\u000b"+
		"\u0000VX\u0003\u0018\f\u0000WU\u0001\u0000\u0000\u0000WV\u0001\u0000\u0000"+
		"\u0000X\u0015\u0001\u0000\u0000\u0000Y]\u0005\u000e\u0000\u0000Z\\\u0003"+
		"\u001a\r\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001\u0000\u0000\u0000]["+
		"\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0001\u0000\u0000"+
		"\u0000_]\u0001\u0000\u0000\u0000`a\u0005\u000e\u0000\u0000a\u0017\u0001"+
		"\u0000\u0000\u0000bc\u0005\u0010\u0000\u0000c\u0019\u0001\u0000\u0000"+
		"\u0000de\u0007\u0000\u0000\u0000e\u001b\u0001\u0000\u0000\u0000\b\u001f"+
		"/3=DHW]";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}