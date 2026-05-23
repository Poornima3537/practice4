package com.example.medicube.service;

import com.example.medicube.dto.LoginRequestDto;
import com.example.medicube.dto.RegisterRequestDto;
import com.example.medicube.dto.AuthResponseDto;
import com.example.medicube.entity.User;
import com.example.medicube.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthResponseDto register(RegisterRequestDto requestDto) {

        User user = new User();

        user.setName(requestDto.getName());
        user.setEmail(requestDto.getEmail());
        user.setPassword(passwordEncoder.encode(requestDto.getPassword()));

        User savedUser = userRepository.save(user);

        return new AuthResponseDto(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail(),
                "User Registered Successfully"
        );
    }

    public AuthResponseDto login(LoginRequestDto requestDto) {

        User user = userRepository.findByEmail(requestDto.getEmail())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

        if (!passwordEncoder.matches(requestDto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return new AuthResponseDto(
                user.getId(),
                user.getName(),
                user.getEmail(),
                "Login Successful"
        );
    }
}