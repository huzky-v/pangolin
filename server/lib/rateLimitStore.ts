import { MemoryStore, Store } from "express-rate-limit";

const store = new MemoryStore();

export function getStore(): Store {
    return store;
}
