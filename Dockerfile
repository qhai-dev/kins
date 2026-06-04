FROM golang:1.26 AS builder
WORKDIR /app
COPY go.work go.work.sum  ./
COPY ./backend ./backend
RUN go work sync
RUN CGO_ENABLED=0 GOOS=linux go build -o service ./backend/app/admin/manager/cmd

FROM alpine:3.22.4
RUN apk --no-cache add ca-certificates tzdata
WORKDIR /app
COPY --from=builder /app/service .
EXPOSE 8888
CMD ["./service"]
