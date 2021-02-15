Spring Boot Kafka WebSocket
---------------------------

Run Locally:
```
./gradlew -t classes
./gradlew bootRun
```

Open:
[http://localhost:8080](http://localhost:8080)

Send a Hello:
```
docker exec -it kafka bash -c "echo \"world\" | kafka-console-producer --topic hellos --broker-list localhost:9092"
```
