def get_bot_response(user_input):
    user_input = user_input.lower()

    if "oi" in user_input or "olá" in user_input:
        return "Olá! Como posso te ajudar?"
    elif "seu nome" in user_input:
        return "Eu sou um chatbot simples criado com Python."
    elif "adeus" in user_input or "tchau" in user_input:
        return "Até logo! Foi um prazer conversar com você."
    elif "ajuda" in user_input:
        return "Claro! Você pode me perguntar sobre meu nome, dar um oi ou dizer tchau."
    else:
        return "Desculpe, ainda estou aprendendo! Tente outra pergunta."
