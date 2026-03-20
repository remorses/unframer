export function mapValueToFieldValue(value, field) {
    if (!field?.type) {
        return null;
    }
    if (value == null) {
        return {
            type: field.type,
            value,
        };
    }
    if (field.type === 'string') {
        return { type: 'string', value: String(value) || '' };
    }
    if (field.type === 'number') {
        return { type: 'number', value: Number(value) ?? null };
    }
    if (field.type === 'boolean') {
        return { type: 'boolean', value: Boolean(value) };
    }
    if (field.type === 'date') {
        try {
            if (!value)
                return null;
            const date = new Date(value);
            return { type: 'date', value: date.toISOString() };
        }
        catch (e) {
            return null;
        }
    }
    if (field.type === 'enum') {
        return { type: 'enum', value: String(value) || '' };
    }
    if (field.type === 'formattedText') {
        const valueString = String(value) || '';
        const looksLikeHtml = valueString.trim().startsWith('<');
        return {
            type: 'formattedText',
            value: valueString,
            contentType: looksLikeHtml ? 'html' : 'markdown',
        };
    }
    if (field.type === 'color') {
        return { type: 'color', value: String(value) || '' };
    }
    if (field.type === 'link') {
        return { type: 'link', value: String(value) || '' };
    }
    if (field.type === 'image') {
        return { type: 'image', value: String(value) || '' };
    }
    return {
        type: field.type,
        value,
    };
}
//# sourceMappingURL=cms.js.map