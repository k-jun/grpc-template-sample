FROM golang:1.12.1

ENV GO111MODULE=on
EXPOSE 9090

WORKDIR /app
COPY . .
RUN go build main.go

CMD ["./main"]

