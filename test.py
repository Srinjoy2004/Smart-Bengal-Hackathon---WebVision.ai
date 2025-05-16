import requests

GROQ_API_KEY = "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"  # Ideally load from env
API_URL = "https://api.groq.com/openai/v1/chat/completions"  # Adjust URL if different

headers = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "llama3-8b-8192",  # Example model, change if needed
    "messages": [
        {"role": "user", "content": "Tell me a funny programming joke."}
    ],
    "max_tokens": 100
}

response = requests.post(API_URL, headers=headers, json=data)

if response.status_code == 200:
    reply = response.json()["choices"][0]["message"]["content"]
    print("AI reply:", reply)
else:
    print("Error:", response.status_code, response.text)
