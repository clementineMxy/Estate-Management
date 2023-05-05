import link from "../../api/Link.js";
import apiUrl from "../../api/url.js";

let HomeModule: Object = {
    state: {
        // 是否显示导航栏
        navBool: true,
        // 是否显示修改对话框
        dialogFormVisible: false,
        uplistData: {},

        listdata: []
    },
    mutations: {
        SET_NAV_BOOL(state: any) {
            state.navBool = !state.navBool;
        },
        // 点击页面中修改按钮后打开对话框，并将点击的那行数据赋给state
        SET_DIALOG(state: any, paylog: any) {
            state.dialogFormVisible = !state.dialogFormVisible;
            state.uplistData = paylog
        },
        // 仅关闭修改对话框
        DIALOG(state: any) {
            state.dialogFormVisible = !state.dialogFormVisible;
            // 刷新页面（但是不理解为什么后端数据更新的代码在刷新页面后面也能work）
            window.location.reload()
        },
        LISTDATA(state: any, paylog: any) {
            state.listdata = paylog
        },
       
    },
    actions: {
        // 初始请求整个页面列表
        USERUPDATE_LIST(context: any) {
            link(apiUrl.userlist).then((ok: any) => {
                console.log(ok);
                context.commit("LISTDATA", ok.data)
            });
        },

        // 删除数据
        DEL_DATA(context: any,payload:any){
            link(apiUrl.userlist+"/"+payload.id,"delete").then((ok: any) => {
                    console.log(ok)
                    window.location.reload()
            });
        }
    },
    getters: {

    }
}

export default HomeModule