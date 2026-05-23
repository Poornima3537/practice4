package com.example.medicube.service;

import com.example.medicube.dto.CartRequestDto;
import com.example.medicube.dto.CartResponseDto;
import com.example.medicube.entity.Cart;
import com.example.medicube.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public CartResponseDto addToCart(CartRequestDto requestDto) {

        Cart cart = new Cart();

        cart.setMedicineName(requestDto.getMedicineName());
        cart.setQuantity(requestDto.getQuantity());
        cart.setTotalPrice(requestDto.getTotalPrice());

        Cart savedCart = cartRepository.save(cart);

        return mapToResponse(savedCart);
    }

    public List<CartResponseDto> getCartItems() {

        return cartRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public String removeCartItem(Long id) {

        cartRepository.deleteById(id);

        return "Cart Item Removed Successfully";
    }

    private CartResponseDto mapToResponse(Cart cart) {

        return new CartResponseDto(
                cart.getId(),
                cart.getMedicineName(),
                cart.getQuantity(),
                cart.getTotalPrice()
        );
    }
}