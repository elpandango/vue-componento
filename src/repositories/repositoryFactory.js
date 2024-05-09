import AuthRepository from "@/repositories/AuthRepository";
import UserRepository from "@/repositories/UserRepository";

const repositories = {
    'Auth': AuthRepository,
    'User': UserRepository,
}
export default {
    get: (name) => repositories[name]
};
