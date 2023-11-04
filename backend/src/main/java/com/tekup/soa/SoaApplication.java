package com.tekup.soa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.tekup.soa")
public class SoaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SoaApplication.class, args);
	}

}
