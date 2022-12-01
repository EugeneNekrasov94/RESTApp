package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;
import ru.kata.spring.boot_security.demo.service.UserServiceImpl;


@Controller
public class AdminController {
    private final UserService userService;

    @Autowired
    public AdminController(UserServiceImpl userServiceImpl) {
        this.userService = userServiceImpl;
    }

    @GetMapping(value = "/admin")

    public String listUsers(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("user", user);
        model.addAttribute("users", this.userService.findAll());
        this.userService.findAll().forEach(System.out::println);
        return "admin";
    }

    @PostMapping(value = "/user-create")
    public String createUser( User user,Model model) {
        userService.addUser(user);
        model.addAttribute("userAdd",user);
        return "redirect:/admin";
    }

    @PostMapping(value = "/user-delete")
    public String deleteUser(Model model,User user) {
        userService.deleteUserById(user.getId());
        model.addAttribute("userDel",user);
        return "redirect:/admin";
    }


    @PostMapping(value = "/user-update")
    public String updateUser(User user, Model modelMap) {
        userService.updateUser(user.getId(), user);
        modelMap.addAttribute("userEdit", user);
        return "redirect:/admin";
    }

    @RequestMapping("/getOne")
    @ResponseBody
    public User getUserById(Long id) {
        return userService.findUserById(id);
    }

}
