export default {
    isDev(){
        return localStorage.getItem("TUNDEVMODE") == "YES"
    }
}