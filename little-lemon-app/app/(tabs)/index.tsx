import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function Index() {
const [name, setName] = useState('');
const [count, setCount] = useState(0);


return (
<SafeAreaView style={styles.container}>
<Text style={styles.title}>Little Lemon – Hello 👋</Text>


<View style={styles.card}>
<Text style={styles.label}>Your name</Text>
<TextInput
placeholder="Type your name"
value={name}
onChangeText={setName}
style={styles.input}
/>
<Text style={styles.greeting}>
{name ? `Welcome, ${name}!` : 'Welcome!'}
</Text>
</View>


<View style={styles.card}>
<Text style={styles.label}>Counter</Text>
<Text style={styles.count}>{count}</Text>
<Button title="Increase" onPress={() => setCount(c => c + 1)} />
</View>
</SafeAreaView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 24, gap: 16, backgroundColor: '#fff' },
title: { fontSize: 24, fontWeight: '700' },
card: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#ddd', gap: 8 },
label: { fontSize: 14, opacity: 0.7 },
input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
greeting: { fontSize: 18, fontWeight: '600' },
count: { fontSize: 32, fontWeight: '800' }
});