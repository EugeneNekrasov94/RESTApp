package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserServiceImpl;


@Controller
public class AdminController {
    private final UserServiceImpl userServiceImpl;

    @Autowired
    public AdminController(UserServiceImpl userServiceImpl) {
        this.userServiceImpl = userServiceImpl;
    }

    @GetMapping(value = "/admin")
    public String listUsers(@AuthenticationPrincipal User user, ModelMap model) {
        model.addAttribute("user",user);
        model.addAttribute("users", this.userServiceImpl.findAll());
        this.userServiceImpl.findAll().forEach(System.out::println);
        return "admin";
    }

    @GetMapping("user-create")
    public String createUserForm(User user, ModelMap modelMap) {
        modelMap.addAttribute("user", user);
        return "/user-create";
    }

    @PostMapping("user-create")
    public String createUser(User user) {
        userServiceImpl.addUser(user);
        return "redirect:/admin";
    }

    @GetMapping("user-delete/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userServiceImpl.deleteUserById(id);
        return "redirect:/admin";
    }


    @RequestMapping(value = "user-update",method = {RequestMethod.PUT,RequestMethod.GET})
    public String updateUser(User user) {
        userServiceImpl.updateUser(user.getId(), user);
        return "redirect:/admin";
    }
    @RequestMapping("/getOne")
    @ResponseBody
    public User getUserById(Long id) {
        return userServiceImpl.findUserById(id);
    }

}
