import i18n from "i18next";

i18n.init({
    resources: {
        en: {
            translation: {
                en: "English",
                zh: "简体中文",
                bt_cancel: "Cancel",
                bt_ok: "OK",
                tl_allAccounts: "All Accounts",
                tl_addAccount: "Add Account",
                tl_setting: "Setting",
                tl_language: "Language",
                tl_terms: "Terms of Use",

                // All Accounts Page
                a_noAccount: "No account yet!",

            }
        },
        zh: {
            translation: {
                en: "English",
                zh: "简体中文",
                bt_cancel: "取消",
                bt_ok: "确定",
                tl_allAccounts: "全部账户",
                tl_addAccount: "添加账户",
                tl_setting: "设置",
                tl_language: "多语言",
                tl_terms: "用户协议",

                // All Accounts Page
                a_noAccount: "还没有账户!",

            }
        }
    },
    fallbackLng: 'en',

}).then(r => r);

export default i18n;