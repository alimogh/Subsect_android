package net.subsect.subserv;

/**
 * Created by markkudlac on 2015-02-16.
 */
import android.provider.BaseColumns;

public interface Const extends BaseColumns {

    public static final int BASE_BLOCKSIZE = 65536;

    public static final String SOURCE_ADDRESS = "www.subsect.net";


    public static final String HTTP_PROT = "http";
    public static final String SYSHTML_DIR = "SysHtml";;
    public static final String USERHTML_DIR = "UserHtml";
    public static final String INSTALL_DIR = "install";
    public static final String FORMUPLOAD = "formupload";

    public static final String API_PATH = "/api/";
    public static final String API_SAVEFILE = "savefile";
    public static final String API_INSERTDB = "insertDB";
    public static final String API_QUERYDB = "queryDB";
    public static final String API_UPDATEDB = "updateDB";
    public static final String API_REMOVEDB = "removeDB";
    public static final String API_GETUPLOADDIR = "getuploaddir/";
    public static final String API_INSTALLAPP = "installapp/";

    public static final String SUBSERV = "subserv";
    public static final String DB_SYS = "S";
    public static final String DB_USER = "U";
    public static final String DB_SUBSERV = DB_SYS+"_" + SUBSERV;
    public static final String PREINSTALL_1 = "TestApp";
    public static final String SKIP_SCHEMA = "#skip";

    public static final String FLD_ID = "id";
    public static final String FLD_STATUS = "status";
    public static final String FLD_CREATED_AT = "created_at";
    public static final String FLD_UPDATED_AT = "updated_at";
    public static final int CURRENT_DB_VERSION = 2;
    public static final int FIXED_DB_VERSION = 1;

    public static final String TBL_REGISTRY= "registry";
    public static final String FLD_APP= "app";
    public static final String FLD_TYPE= "type";
}
