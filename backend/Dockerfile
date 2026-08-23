# Multi-stage Dockerfile for attendance-backend
# Builder: uses Maven with JDK 25 to compile the Spring Boot application
FROM maven:3.10.1-eclipse-temurin-25 AS builder
WORKDIR /workspace

# Copy only pom first to leverage Docker cache for dependencies
COPY pom.xml .
# If you have other modules or a parent pom, adjust accordingly
COPY src ./src

# Build the application (skip tests for faster image builds; run tests in CI)
RUN mvn -B -DskipTests package

# Runtime image: smaller JRE image for running the built jar
FROM eclipse-temurin:25-jre AS runtime
WORKDIR /app

# Copy the packaged jar from the builder stage
COPY --from=builder /workspace/target/*.jar ./app.jar

EXPOSE 8080

# Default JVM options can be adjusted via environment or compose overrides
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
