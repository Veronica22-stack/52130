// Generated from seguncaso.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link seguncasoParser}.
 */
public interface seguncasoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(seguncasoParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(seguncasoParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(seguncasoParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(seguncasoParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(seguncasoParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(seguncasoParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#bloque}.
	 * @param ctx the parse tree
	 */
	void enterBloque(seguncasoParser.BloqueContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#bloque}.
	 * @param ctx the parse tree
	 */
	void exitBloque(seguncasoParser.BloqueContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(seguncasoParser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(seguncasoParser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void enterCaso_defecto(seguncasoParser.Caso_defectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void exitCaso_defecto(seguncasoParser.Caso_defectoContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(seguncasoParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(seguncasoParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(seguncasoParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(seguncasoParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(seguncasoParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(seguncasoParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(seguncasoParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(seguncasoParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(seguncasoParser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(seguncasoParser.ConstanteContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(seguncasoParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(seguncasoParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(seguncasoParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(seguncasoParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link seguncasoParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(seguncasoParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link seguncasoParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(seguncasoParser.CaracterContext ctx);
}