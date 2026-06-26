package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    public void test()

    {
        assertEquals(3, new Calculator().add(1,2));

    }
    @Test
    public void test1()

    {
        assertEquals("java", "java");

    }

}