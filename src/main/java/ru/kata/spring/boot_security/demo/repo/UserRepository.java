package ru.kata.spring.boot_security.demo.repo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.util.BeanDefinitionUtils;
import org.springframework.stereotype.Repository;
import ru.kata.spring.boot_security.demo.model.User;

import javax.persistence.EntityManager;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("select u from User u join fetch u.roles where u.name = :name")
    User findUserByName(String name);
}
