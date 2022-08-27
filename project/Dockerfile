FROM odoo:14.0

USER root

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8

RUN apt-get update \
    && apt-get install --no-install-recommends -y python-passlib  python3-wheel \
     openssl build-essential libssl-dev libxrender-dev git-core libx11-dev libxext-dev \
     libfontconfig1-dev libfreetype6-dev fontconfig  \
    && apt-get install python3.7-dev -y\
    && rm -f /var/lib/apt/lists/*.*

COPY requirements.txt ./

RUN pip3 install -r  requirements.txt

USER odoo

WORKDIR /mnt/extra-addons

COPY . .
