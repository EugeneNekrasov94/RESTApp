package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;


@Controller
public class AdminController {
    private final UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/admin")
    public String listUsers(ModelMap model) {
        model.addAttribute("users", this.userService.findAll());
        this.userService.findAll().forEach(System.out::println);
        return "admin";
    }

    @GetMapping("user-create")
    public String createUserForm(User user, ModelMap modelMap) {
        modelMap.addAttribute("user", user);
        return "/user-create";
    }

    @PostMapping("user-create")
    public String createUser(User user) {
        userService.addUser(user);
        return "redirect:/admin";
    }

    @GetMapping("user-delete/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteUserById(id);
        return "redirect:/admin";
    }

    @GetMapping("user-update/{id}")
    public String updateUserForm(@PathVariable("id") Long id, Model modelMap) {
        User user = userService.findUserById(id);
        modelMap.addAttribute("user", user);
        return "/user-update";
    }

    @PostMapping("user-update")
    public String updateUser(User user) {
        userService.updateUser(user.getId(), user);
        return "redirect:/admin";
    }

}
