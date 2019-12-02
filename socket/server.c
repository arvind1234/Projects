#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <string.h>
#include <arpa/inet.h>

void error(char *msg){
    perror(msg);
    exit(1);
}

int main(int argc, char *argv[]){
    int sockfd, newsockfd, portno, clilen, n;
    char buffer[256];
    struct sockaddr_in serv_addr, cli_addr;

    if(argc < 2) {
        error("Error: no port is available");
    }

    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    bzero((char *) &serv_addr, sizeof(serv_addr));

    portno = atoi(argv[1]);
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(portno);
    serv_addr.sin_addr.s_addr = INADDR_ANY;

    if(bind(sockfd, (struct sockaddr*) &serv_addr, sizeof(serv_addr)) < 0) {
        error("Binding error...");
    }

    listen(sockfd, 5);

    clilen = sizeof(cli_addr);
    newsockfd = accept(sockfd, (struct sockaddr *) &cli_addr, &clilen);

    if(newsockfd < 0) {
        error("Accept error");
    }
    bzero(buffer, 256);
    
    n = read(newsockfd, buffer, 255);
    if(n < 0) {
        error("Read error");
    }
    
    printf("Message from client: %s", buffer);
    bzero(buffer, 256);
    printf("\nDo you want to say something:");
    scanf("%s", buffer);
    n = write(newsockfd, buffer, sizeof(buffer));

    if (n < 0) error("ERROR writing to socket");

    return 0;
    
}