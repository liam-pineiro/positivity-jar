package com.positivityJar;

//------------------------------USER_REPOSITORY------------------\\



import java.util.List;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@ApplicationScoped
public class UserRepository {
    
    @PersistenceContext
    private EntityManager entityManager;

    //default login for testing

    @PostConstruct
    public void init(){
        if(findByEmail("test@positivityjar.com") == null){
            User defaultUser = new User();
            defaultUser.setEmail("test@positivtyjar.com");
            defaultUser.setPassword("password");
            entityManager.persist(defaultUser);
        }
    }



    public User findByEmail(String email){
        List<User> users = entityManager.createQuery("SELECT u FROM User u WHERE u.email = :email", User.class)
                .setParameter("email", email)
                .getResultList();
        return users.isEmpty() ? null : users.get(0);
    }

    public User registerUser(User user){
        entityManager.persist(user);
        return user;
    }
}
