import PocketBase from "pocketbase";

export const pb = new PocketBase(import.meta.env.PUBLIC_PB_URL || "http://127.0.0.1:8090");
