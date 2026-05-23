package com.example.medicube.controller;

import com.example.medicube.dto.CartRequestDto;
import com.example.medicube.dto.CartResponseDto;
import com.example.medicube.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    public CartResponseDto addToCart(@RequestBody CartRequestDto requestDto) {
        return cartService.addToCart(requestDto);
    }

    @GetMapping
    public List<CartResponseDto> getCartItems() {
        return cartService.getCartItems();
    }

    @DeleteMapping("/{id}")
    public String removeCartItem(@PathVariable Long id) {
        return cartService.removeCartItem(id);
    }
}