FROM alpine

RUN apk update && apk add --no-cache \
  bash curl docker-cli fzf git htop mc nano openssh wget zsh \
  chromium firefox \
  nodejs yarn

RUN addgroup --system docker \
  && adduser --uid 1000 --home /root --disabled-password --ingroup vscode --ingroup docker vscode

USER vscode

COPY ./configs/ /root/

RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/.zsh/powerlevel10k \
  && git clone https://github.com/hcgraf/zsh-sudo.git ~/.zsh/zsh-sudo \
  && git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions \
  && git clone https://github.com/zsh-users/zsh-completions.git ~/.zsh/zsh-completions \
  && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.zsh/zsh-syntax-highlighting

