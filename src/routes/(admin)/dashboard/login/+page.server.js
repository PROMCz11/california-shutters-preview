import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, fetch }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const res = await fetch("../../../api/admin/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: { "Content-Type": "application/json" }
        });
        const loginData = await res.json();
        const status = loginData.status;
        if(!status) {
            return {status: false, message: "Wrong email or password"}
            return {status: false, message: loginData.message}
        }
        throw redirect(302, "dashboard");
    }
};