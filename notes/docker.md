```
docker-compose run --rm ovpn ovpn_genconfig -u udp://chc-openvpn.duckdns.org
```

docker-compose run --rm openvpn ovpn_getclient "$CLIENTNAME" > "$CLIENTNAME.ovpn"

echo url="https://www.duckdns.org/update?domains=chc-openvpn&token=4b37717e-78d7-47ce-ae9c-942105e3c820&ip=" | curl -k -o ~/duckdns/duck.log -K -

docker-compose run --rm openvpn ovpn_genconfig -u udp://184.168.126.121

version: '2'
services:
  openvpn:
    cap_add:
     - NET_ADMIN
    image: themardy/openvpn
    container_name: openvpn
    ports:
     - "1194:1194/udp"
    restart: always
    volumes:
      - /home/tmu-dev/openvpn:/etc/openvpn
