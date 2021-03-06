/**
 * Created by abc on 08/02/2017.
 */
/**
 * Created by abc on 08/02/2017.
 */

var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database("munsi.db");

db.serialize(function () {

    var tableArea = "CREATE TABLE IF NOT EXISTS AREA( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "AREA_ID INTEGER, " +
        "AREA INTEGER, " +
        "CREATED_BY INTEGER, " +
        "UPDATED_BY INTEGER, " +
        "CREATED_TS TEXT, " +
        "UPDATED_TS TEXT)";
    db.run(tableArea);


    var combiDetail = "CREATE TABLE IF NOT EXISTS COMBIDETAIL( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "CPID INTEGER, " +
        "COMBI_PROD_ID INTEGER, " +
        "SR TEXT, " +                   // TODO
        "PROD_ID INTEGER, " +
        "PROD_DES TEXT, " +               // TODO
        "QTY INTEGER, " +                 // TODO
        "CREATED_BY INTEGER, " +
        "UPDATED_BY INTEGER, " +
        "CREATED_TS TEXT, " +
        "UPDATED_TS TEXT)";
    db.run(combiDetail);


    var crateGl = "CREATE TABLE IF NOT EXISTS CRATE_GL( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "C_DATE TEXT, " +
        "CUST_ID INTEGER, " +
        "SRC_ENT INTEGER, " +                   // TODO
        "OP_QTY INTEGER, " +
        "SUP_QTY INTEGER, " +               // TODO
        "RET_QTY INTEGER, " +                 // TODO
        "CREATED_BY INTEGER, " +
        "UPDATED_BY INTEGER, " +
        "CREATED_TS TEXT, " +
        "UPDATED_TS TEXT)";
    db.run(crateGl);


    var dc = "CREATE TABLE IF NOT EXISTS DC( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DC_NO INTEGER, " +
        "DC_DATE TEXT, " +
        "CUST_CODE TEXT, " +
        "O_NO INTEGER, " +
        "O_DATE TEXT, " +
        "AREA INTEGER, " +
        "S_MAN TEXT, " +
        "VAN INTEGER, " +
        "GROSS_TOT INTEGER, " +
        "SCHEME1_TOT INTEGER, " +
        "SCHEME2_TOT INTEGER, " +
        "DMG_TOT INTEGER, " +
        "DESC INTEGER, " +
        "AD INTEGER, " +
        "LS INTEGER, " +
        "R_OFF INTEGER, " +
        "FIN_AMT INTEGER, " +
        "REMARK TEXT, " +
        "COLL_TYPE TEXT, " +
        "COLL_DATE TEXT, " +
        "COLL_AMT1 INTEGER, " +
        "COLL_AMT2 INTEGER, " +
        "DEP_IN TEXT, " +
        "CHQ_NO INTEGER, " +
        "CHQ_DATE TEXT, " +
        "DRAWEE_BANK TEXT, " +
        "BRANCH TEXT, " +
        "CLEARING TEXT, " +
        "CREATED_BY INTEGER, " +
        "UPDATED_BY INTEGER, " +
        "CREATED_TS TEXT, " +
        "UPDATED_TS TEXT)";
    db.run(dc);

    var dcDetail = "CREATE TABLE IF NOT EXISTS DCDETAIL( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCD_ID INTEGER, " +
        "DC_NO INTEGER, " +
        "SR_NO INTEGER, " +
        "PROD_CODE TEXT, " +
        "PROD_DS TEXT, " +
        "PACKAGING TEST, " +
        "RATE INTEGER, " +
        "QTY INTEGER, " +
        "BOX INTEGER, " +
        "FREE INTEGER, " +
        "SCH1 INTEGER, " +
        "SCHEME1 INTEGER, " +
        "SCH2 INTEGER, " +
        "SCHEME2 INTEGER, " +
        "REPL INTEGER, " +
        "DMG INTEGER, " +
        "DMG_MRP REAL, " +
        "DMG_AMT REAL, " +
        "AMT REAL, " +
        "BATCH_NO INTEGER, " +
        "MRP REAL, " +
        "RET_QTY INTEGER, " +
        "CREATED_BY INTEGER, " +
        "UPDATED_BY INTEGER, " +
        "CREATED_TS TEXT, " +
        "UPDATED_TS TEXT)";
    db.run(dcDetail);

    var dcpmDetail = "CREATE TABLE IF NOT EXISTS DCPMDETAIL( " +
        "ID                  INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCPMD_ID            INTEGER, " +
        "SR_NO               INTEGER, " +
        "PROD_CODE           TEXT, " +
        "SIZE                INTEGER, " +
        "RATE                REAL, " +
        "QTY                 INTEGER, " +
        "FREE                INTEGER, " +
        "RYPL                INTEGER, " +
        "PUR_ID              INTEGER, " +
        "P_DATE              TEXT, " +
        "S_NAME              TEXT, " +
        "INV_NO              INTEGER, " +
        "GROSS_TOT           REAL, " +
        "SCHEME1             REAL, " +
        "SCHEME2             REAL, " +
        "OCT_FRGHT           REAL, " +                      // TODO
        "APMC                REAL, " +                             // TODO
        "CR_AMT              REAL, " +
        "DISC                REAL, " +
        "TAX_AMT             REAL, " +
        "AD                  REAL, " +
        "LS                  REAL, " +
        "RO_OFF              INTEGER, " +
        "FIN_AMT             REAL, " +
        "REMARK              TEXT, " +
        "TAX_AGAINST         TEXT, " +
        "X1                  TEXT, " +
        "X2                  TEXT, " +
        "X3                  TEXT, " +
        "X4                  TEXT, " +
        "PAID_AMT            REAL, " +
        "REF_NO              INTEGER, " +
        "CREATED_BY          INTEGER, " +
        "UPDATED_BY          INTEGER, " +
        "CREATED_TS          TEXT, " +
        "UPDATED_TS          TEXT)";
    db.run(dcpmDetail);

    var dcPurDetail = "CREATE TABLE IF NOT EXISTS DC_PUR_DETAIL( " +
        "ID INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "PROD_ID               INTEGER, " +
        "PUR_ID                INTEGER, " +
        "SR_NO                 INTEGER, " +
        "PROD_CODE             TEXT, " +
        "PROD_DS               TEXT, " +
        "RATE                  REAL, " +
        "BOX                   INTEGER, " +
        "QTY                   INTEGER, " +
        "TAX                   REAL, " +
        "FREE                  INTEGER, " +
        "SCH1                  REAL, " +
        "SCHEME1               REAL, " +
        "SCH2                  REAL, " +
        "SCHEME2               REAL, " +
        "AMT                   REAL, " +
        "TAX_AMT               REAL, " +
        "BACH_NO               INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(dcPurDetail);


    var dcsmDetail = "CREATE TABLE IF NOT EXISTS DCSM_DETAIL( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DCSMD_ID              INTEGER, " +
        "DC_NO                 INTEGER, " +
        "SR_NO                 INTEGER, " +
        "PROD_CODE             TEXT, " +
        "SIZE                  INTEGER, " +
        "RATE                  REAL, " +
        "QTY                   INTEGER, " +
        "FREE                  INTEGER, " +
        "REPL                  INTEGER, " +
        "DMG                   REAL, " +
        "DMG_MRP               REAL, " +
        "DMG_AMT               REAL, " +
        "RET_QTY               INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(dcsmDetail);


    var desp = "CREATE TABLE IF NOT EXISTS DESP( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "DESP_ID               INTEGER, " +
        "DESP_DETAIL           TEXT, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(desp);


    var gl = "CREATE TABLE IF NOT EXISTS GL1( " +
        "ID                    INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "GL_ID                 INTEGER, " +
        "GL_DATE               TEXT, " +
        "GL_BY                 TEXT, " +
        "GL_TO                 TEXT, " +
        "S_REF                 INTEGER, " +
        "P_REF                 INTEGER, " +
        "AMT                   REAL, " +
        "SRC_ENT               TEXT, " +
        "CLEARING              TEXT, " +
        "CHQ_DATE              TEXT, " +
        "REMARKS1              TEXT, " +
        "REMARKS2              TEXT, " +
        "SP_REF                TEXT, " +
        "NOS                    INTEGER, " +
        "CREATED_BY            INTEGER, " +
        "UPDATED_BY            INTEGER, " +
        "CREATED_TS            TEXT, " +
        "UPDATED_TS            TEXT)";
    db.run(gl);
    
});

db.close();
