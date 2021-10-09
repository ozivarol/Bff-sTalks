export default function(errorCode){
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz E-posta Adresi"
            
        case "auth/email-already-exists":
            return "Kullanıcı zaten kayıtlı"

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı"
        case "auth/weak-password":
            return "Şifre çok zayıf"
        case "auth/wrong-password":
            return "Şifre geçersiz"          
        default:
            return errorCode
    }
}