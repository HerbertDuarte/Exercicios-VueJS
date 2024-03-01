import { ref, watch } from "vue";
import { defineStore } from "pinia";
export interface IUser {
  name: string;
  email: string;
  password?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<boolean>(false);
  const user = ref<IUser | undefined>(undefined);

  function verifyLogin(): void {
    if (localStorage.getItem("user") !== null) {
      /* lógica de request de login para confirmar o login do usuario */

      const userLogged: IUser = JSON.parse(
        String(localStorage.getItem("user"))
      );
      user.value = userLogged;
    }
  }

  function login(data: ILogin): void {
    /* lógica de login */
    console.log("login");
    const newUser: IUser = {
      ...data,
      name: "Herbert",
      password: undefined,
    };
    user.value = newUser;
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout(): void {
    /* lógica de login */
    user.value = undefined;
    localStorage.removeItem("user");
  }

  watch(user, () => {
    if (user.value) {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  });

  return { isAuthenticated, user, login, logout, verifyLogin };
});
