package com.example.medicube.service;

import com.example.medicube.dto.OrderRequestDto;
import com.example.medicube.dto.OrderResponseDto;
import com.example.medicube.entity.Order;
import com.example.medicube.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public OrderResponseDto placeOrder(OrderRequestDto requestDto) {

        Order order = new Order();

        order.setCustomerName(requestDto.getCustomerName());
        order.setAmount(requestDto.getAmount());
        order.setStatus("PLACED");

        Order savedOrder = orderRepository.save(order);

        return mapToResponse(savedOrder);
    }

    public List<OrderResponseDto> getAllOrders() {

        return orderRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private OrderResponseDto mapToResponse(Order order) {

        return new OrderResponseDto(
                order.getId(),
                order.getCustomerName(),
                order.getAmount(),
                order.getStatus()
        );
    }
}