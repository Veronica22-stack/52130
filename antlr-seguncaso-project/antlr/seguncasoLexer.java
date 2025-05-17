// Generated from seguncaso.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class seguncasoLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SEGUN=1, HACER=2, CASO=3, DEFECTO=4, FINSEGUN=5, SALIR=6, IMPRIMIR=7, 
		LPAREN=8, RPAREN=9, LBRACE=10, RBRACE=11, SEMICOLON=12, COLON=13, COMILLA=14, 
		SIMBOLO=15, NUM=16, ID=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SEGUN", "HACER", "CASO", "DEFECTO", "FINSEGUN", "SALIR", "IMPRIMIR", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMICOLON", "COLON", "COMILLA", 
			"SIMBOLO", "NUM", "ID", "WS"
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


	public seguncasoLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "seguncaso.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012y\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n"+
		"\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0004\u000fh\b\u000f\u000b\u000f\f\u000f"+
		"i\u0001\u0010\u0001\u0010\u0005\u0010n\b\u0010\n\u0010\f\u0010q\t\u0010"+
		"\u0001\u0011\u0004\u0011t\b\u0011\u000b\u0011\f\u0011u\u0001\u0011\u0001"+
		"\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000"+
		"\u0005\u0006\u0000!!,,..??\u00a1\u00a1\u00c2\u00c2\u0001\u000009\u0003"+
		"\u0000AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\f\r  {\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003+"+
		"\u0001\u0000\u0000\u0000\u00051\u0001\u0000\u0000\u0000\u00076\u0001\u0000"+
		"\u0000\u0000\t>\u0001\u0000\u0000\u0000\u000bG\u0001\u0000\u0000\u0000"+
		"\rM\u0001\u0000\u0000\u0000\u000fV\u0001\u0000\u0000\u0000\u0011X\u0001"+
		"\u0000\u0000\u0000\u0013Z\u0001\u0000\u0000\u0000\u0015\\\u0001\u0000"+
		"\u0000\u0000\u0017^\u0001\u0000\u0000\u0000\u0019`\u0001\u0000\u0000\u0000"+
		"\u001bb\u0001\u0000\u0000\u0000\u001dd\u0001\u0000\u0000\u0000\u001fg"+
		"\u0001\u0000\u0000\u0000!k\u0001\u0000\u0000\u0000#s\u0001\u0000\u0000"+
		"\u0000%&\u0005s\u0000\u0000&\'\u0005e\u0000\u0000\'(\u0005g\u0000\u0000"+
		"()\u0005u\u0000\u0000)*\u0005n\u0000\u0000*\u0002\u0001\u0000\u0000\u0000"+
		"+,\u0005h\u0000\u0000,-\u0005a\u0000\u0000-.\u0005c\u0000\u0000./\u0005"+
		"e\u0000\u0000/0\u0005r\u0000\u00000\u0004\u0001\u0000\u0000\u000012\u0005"+
		"c\u0000\u000023\u0005a\u0000\u000034\u0005s\u0000\u000045\u0005o\u0000"+
		"\u00005\u0006\u0001\u0000\u0000\u000067\u0005d\u0000\u000078\u0005e\u0000"+
		"\u000089\u0005f\u0000\u00009:\u0005e\u0000\u0000:;\u0005c\u0000\u0000"+
		";<\u0005t\u0000\u0000<=\u0005o\u0000\u0000=\b\u0001\u0000\u0000\u0000"+
		">?\u0005f\u0000\u0000?@\u0005i\u0000\u0000@A\u0005n\u0000\u0000AB\u0005"+
		"s\u0000\u0000BC\u0005e\u0000\u0000CD\u0005g\u0000\u0000DE\u0005u\u0000"+
		"\u0000EF\u0005n\u0000\u0000F\n\u0001\u0000\u0000\u0000GH\u0005s\u0000"+
		"\u0000HI\u0005a\u0000\u0000IJ\u0005l\u0000\u0000JK\u0005i\u0000\u0000"+
		"KL\u0005r\u0000\u0000L\f\u0001\u0000\u0000\u0000MN\u0005i\u0000\u0000"+
		"NO\u0005m\u0000\u0000OP\u0005p\u0000\u0000PQ\u0005r\u0000\u0000QR\u0005"+
		"i\u0000\u0000RS\u0005m\u0000\u0000ST\u0005i\u0000\u0000TU\u0005r\u0000"+
		"\u0000U\u000e\u0001\u0000\u0000\u0000VW\u0005(\u0000\u0000W\u0010\u0001"+
		"\u0000\u0000\u0000XY\u0005)\u0000\u0000Y\u0012\u0001\u0000\u0000\u0000"+
		"Z[\u0005{\u0000\u0000[\u0014\u0001\u0000\u0000\u0000\\]\u0005}\u0000\u0000"+
		"]\u0016\u0001\u0000\u0000\u0000^_\u0005;\u0000\u0000_\u0018\u0001\u0000"+
		"\u0000\u0000`a\u0005:\u0000\u0000a\u001a\u0001\u0000\u0000\u0000bc\u0005"+
		"\"\u0000\u0000c\u001c\u0001\u0000\u0000\u0000de\u0007\u0000\u0000\u0000"+
		"e\u001e\u0001\u0000\u0000\u0000fh\u0007\u0001\u0000\u0000gf\u0001\u0000"+
		"\u0000\u0000hi\u0001\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001"+
		"\u0000\u0000\u0000j \u0001\u0000\u0000\u0000ko\u0007\u0002\u0000\u0000"+
		"ln\u0007\u0003\u0000\u0000ml\u0001\u0000\u0000\u0000nq\u0001\u0000\u0000"+
		"\u0000om\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000p\"\u0001\u0000"+
		"\u0000\u0000qo\u0001\u0000\u0000\u0000rt\u0007\u0004\u0000\u0000sr\u0001"+
		"\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000us\u0001\u0000\u0000\u0000"+
		"uv\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000wx\u0006\u0011\u0000"+
		"\u0000x$\u0001\u0000\u0000\u0000\u0004\u0000iou\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}