import {
  ServerDatabaseError
} from "./chunk-32KK4XC6.js";
import "./chunk-IKQSD2QC.js";

// /:https://app.framerstatic.com/SqliteDatabase-B4N3I6LN.mjs
var __unframerWindow = typeof window !== "undefined" ? window : void 0;
var SQLITE_GROWTH_PADDING_BYTES = 1048576;
var databaseSession;
var databaseSessionPromise;
async function createDatabaseSession() {
  if (typeof __unframerWindow === "undefined") {
    throw new ServerDatabaseError("the CMS SQLite database can only be loaded in a browser environment.");
  }
  const [{ default: initSqlite3 }, { default: defaultBlogDatabaseBytes }, { default: sqliteWasmBytes }] = await Promise.all([
    import("./sqlite-wasm-IRL4SKWV-BT4WQIJJ.js"),
    import("./default-blog-sqlite-LWKLSTVF-CUUUSWW5.js"),
    import("./sqlite3-HSNXITW6-BOB4BJ2M.js")
  ]);
  const initOptions = {
    wasmBinary: sqliteWasmBytes
  };
  const sqlite3 = await initSqlite3(initOptions);
  const bytes = new Uint8Array(defaultBlogDatabaseBytes);
  const db = new sqlite3.oo1.DB(":memory:");
  const bufferSize = Math.max(bytes.byteLength * 2, bytes.byteLength + SQLITE_GROWTH_PADDING_BYTES);
  const dataPointer = sqlite3.capi.sqlite3_malloc(bufferSize);
  try {
    sqlite3.wasm.heap8u().fill(0, dataPointer, dataPointer + bufferSize);
    sqlite3.wasm.heap8u().set(bytes, dataPointer);
    db.checkRc(
      sqlite3.capi.sqlite3_deserialize(
        db,
        "main",
        dataPointer,
        bytes.byteLength,
        bufferSize,
        sqlite3.capi.SQLITE_DESERIALIZE_FREEONCLOSE | sqlite3.capi.SQLITE_DESERIALIZE_RESIZEABLE
      )
    );
    return {
      db,
      sqlite3
    };
  } catch (error) {
    sqlite3.capi.sqlite3_free(dataPointer);
    db.close();
    throw error;
  }
}
async function getDatabaseSession() {
  if (databaseSession) return databaseSession;
  if (!databaseSessionPromise) {
    databaseSessionPromise = createDatabaseSession().then((session) => {
      databaseSession = session;
      return session;
    }).catch((error) => {
      databaseSessionPromise = void 0;
      throw error;
    });
  }
  return databaseSessionPromise;
}
function executePreparedStatement(session, preparedStatement) {
  const statement = session.db.prepare(preparedStatement.sql);
  try {
    const preparedSql = session.sqlite3.capi.sqlite3_sql(statement);
    assertNoTrailingSql(preparedStatement.sql, preparedSql);
    bindPreparedStatementParameters(statement, preparedStatement.parameters);
    const columnNames = statement.columnCount > 0 ? statement.getColumnNames([]) : [];
    const rows = [];
    while (statement.step()) {
      rows.push(statement.get({}));
    }
    return {
      columnNames,
      executedSql: [preparedSql],
      rows,
      changes: session.db.changes(),
      totalChanges: session.db.changes(true)
    };
  } finally {
    statement.finalize();
  }
}
function assertNoTrailingSql(sql, preparedSql) {
  const trailingSql = sql.slice(preparedSql.length).trim();
  if (trailingSql) {
    throw new Error("Server database prepared statements must contain exactly one SQL statement.");
  }
}
function bindPreparedStatementParameters(statement, parameters) {
  const sqlParameterNames = getSqlParameterNames(statement);
  const bindingParameters = {};
  const unusedParameterNames = new Set(parameters.keys());
  for (const sqlParameterName of sqlParameterNames) {
    const parameterName = normalizeSqlParameterName(sqlParameterName);
    if (!parameters.has(parameterName)) {
      throw new Error(`Server database prepared statement is missing the "${parameterName}" SQL parameter.`);
    }
    const value = parameters.get(parameterName);
    if (value === void 0) {
      throw new Error(`Server database prepared statement parameter "${parameterName}" is undefined.`);
    }
    bindingParameters[sqlParameterName] = value;
    unusedParameterNames.delete(parameterName);
  }
  const unexpectedParameterNames = Array.from(unusedParameterNames);
  if (unexpectedParameterNames.length > 0) {
    throw new Error(
      `Server database prepared statement received unexpected SQL parameter${unexpectedParameterNames.length === 1 ? "" : "s"}: ${unexpectedParameterNames.map((parameterName) => `"${parameterName}"`).join(", ")}.`
    );
  }
  if (sqlParameterNames.length > 0) {
    statement.bind(bindingParameters);
  }
}
function getSqlParameterNames(statement) {
  if (!hasParameterNames(statement)) {
    throw new Error("SQLite prepared statement parameter names are not available.");
  }
  const parameterNames = [];
  const normalizedParameterNames = /* @__PURE__ */ new Set();
  for (let parameterIndex = 1; parameterIndex <= statement.parameterCount; parameterIndex++) {
    const sqlParameterName = statement.getParamName(parameterIndex);
    if (!sqlParameterName || !isNamedSqlParameterName(sqlParameterName)) {
      throw new Error("Server database prepared statements must use named SQL parameters.");
    }
    const parameterName = normalizeSqlParameterName(sqlParameterName);
    if (normalizedParameterNames.has(parameterName)) {
      throw new Error(`Server database prepared statement has multiple SQL parameters named "${parameterName}".`);
    }
    parameterNames.push(sqlParameterName);
    normalizedParameterNames.add(parameterName);
  }
  return parameterNames;
}
function hasParameterNames(statement) {
  return "getParamName" in statement && typeof statement.getParamName === "function";
}
function isNamedSqlParameterName(parameterName) {
  return parameterName.startsWith(":") || parameterName.startsWith("@") || parameterName.startsWith("$");
}
function normalizeSqlParameterName(parameterName) {
  return parameterName.slice(1);
}
function normalizePreparedStatement(sql, parameters) {
  if (typeof sql !== "string") {
    throw new Error("Server database prepared statements must include SQL.");
  }
  const trimmedSql = sql.trim();
  if (!trimmedSql) {
    throw new ServerDatabaseError("enter a SQL statement to run.");
  }
  if (!isObject(parameters) || Array.isArray(parameters)) {
    throw new Error("Server database prepared statements must include a named parameters object.");
  }
  return {
    sql: trimmedSql,
    parameters: normalizePreparedStatementParameters(parameters)
  };
}
function normalizePreparedStatementParameters(parameters) {
  const normalizedParameters = /* @__PURE__ */ new Map();
  for (const [parameterName, value] of Object.entries(parameters)) {
    if (!parameterName || isNamedSqlParameterName(parameterName)) {
      throw new Error("Server database prepared statement parameter names must omit the SQL prefix.");
    }
    normalizedParameters.set(parameterName, normalizePreparedStatementParameter(value));
  }
  return normalizedParameters;
}
function normalizePreparedStatementParameter(value) {
  if (isPreparedStatementParameter(value)) return value;
  throw new Error("Server database prepared statement parameters must be SQLite-compatible values.");
}
function isPreparedStatementParameter(value) {
  return value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
async function executeServerDatabaseQuery(sql, parameters = {}) {
  const normalizedPreparedStatement = normalizePreparedStatement(sql, parameters);
  const session = await getDatabaseSession();
  return executePreparedStatement(session, normalizedPreparedStatement);
}
async function resetSqliteDatabase() {
  if (databaseSession) {
    databaseSession.db.close();
  }
  databaseSession = void 0;
  databaseSessionPromise = void 0;
}
export {
  executeServerDatabaseQuery,
  resetSqliteDatabase
};
