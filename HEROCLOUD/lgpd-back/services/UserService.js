import userRepository from '../repositories/UserRepository.js';

const saveUser = (useModel) => {
    return userRepository.saveUser(useModel);
}

const getUserById = (id) => {
    return userRepository.getUserById(id);
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const deleteUserById = (id) => {
    return userRepository.deleteUserById(id);
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deleteUserById,
    updateUserById,
}

export default service;