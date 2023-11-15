import { useFetch } from "nuxt/app";

const { data: student } = await useFetch("https://wtf-backend-production.up.railway.app/api/search-student/211-00914")


// "https://wtf-backend-production.up.railway.app/api/get-total-payment/1"
// "https://wtf-backend-production.up.railway.app/api/search-student/211-00914"
// "https://wtf-backend-production.up.railway.app/api/get-total-student-payment/211-00914"
// "https://wtf-backend-production.up.railway.app/api/student-logs/211-00914"