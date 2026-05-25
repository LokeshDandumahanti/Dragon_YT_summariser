const text = $input.item.json.message.text;

// Extract YouTube URL from message
const urlMatch = text.match(/(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/);
const videoUrl = urlMatch ? urlMatch[0] : null;

return [{
  json: {
    videoUrl: videoUrl,
    chatId: $input.item.json.message.chat.id,
    originalText: text
  }
}];
