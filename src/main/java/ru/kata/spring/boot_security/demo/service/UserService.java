package ru.kata.spring.boot_security.demo.service;

import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;

public interface UserService {
    User addUser(User user);

    User findUserById(Long id);

    void deleteUserById(Long id);

    void updateUser(Long id, User user);

    List<User> findAll();

    User findUserByEmail(String name);
}