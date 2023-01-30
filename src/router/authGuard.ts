/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveAuthGuard = (_to: RouteLocation, _from: RouteLocation, next: any) => {

  const token = localStorage.getItem("access_token");

  if (token) {
    // queremos navegar!
    next();
  } else {
    alert("No estás autenticado");
    next({ name: "login" });
  }
};

export default haveAuthGuard;