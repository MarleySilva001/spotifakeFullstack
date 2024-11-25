INSERT INTO artists (nome, bio, "imageUrl", "createdAt", "updatedAt") VALUES
('Travis Scott', ' Rapper, cantor, compositor e produtor musical norte-americano. Conhecido por seu estilo único que mistura rap, trap e hip-hop com elementos psicodélicos e melódicos', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538167/yohniuegvcrwsdmldnuu.jpg', NOW(), NOW()),
('kendrick Lamar', ' Rapper, compositor e produtor musical norte-americano. Conhecido por sua habilidade lírica, narrativas complexas e abordagens temáticas profundas. Vencedor de 17 prêmios Grammy.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538245/dgvvm7mfsziqtf41kmtx.jpg', NOW(), NOW()),
('Frank Ocean', 'Cantor, compositor, produtor e empresário. Conhecido por sua abordagem única ao R&B, soul e hip-hop, bem como por suas letras introspectivas e poéticas.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538303/cdzckbnntiomy67cla0a.jpg', NOW(), NOW());
('Kanye West', 'Rapper, produtor musical, designer de moda e empresário norte-americano. Famoso por sua inovação artística, controvérsias públicas e contribuições significativas à música e à moda.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538808/g7gzbzyu7iwgrzuoe9d7.jpg', NOW(), NOW());
('Metro Boomin', 'Cantor, compositor, produtor e empresário. Conhecido por sua abordagem única ao R&B, soul e hip-hop, bem como por suas letras introspectivas e poéticas.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538914/uvcmruzbsi275fzspbwe.jpg', NOW(), NOW());
('J. Cole', 'Cantor, compositor, produtor e empresário. Conhecido por sua abordagem única ao R&B, soul e hip-hop, bem como por suas letras introspectivas e poéticas.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538999/keedclbzg5nxwbatsii8.jpg', NOW(), NOW());
('Drake', 'Cantor, compositor, produtor e empresário. Conhecido por sua abordagem única ao R&B, soul e hip-hop, bem como por suas letras introspectivas e poéticas.', 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732538981/dtjmng8h9ou0isqt1c3s.jpg', NOW(), NOW());


INSERT INTO albums (title, "releaseYear", "coverImageUrl", "createdAt", "updatedAt", artista_id) VALUES
('Rodeo', 2015, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544132/f0glxmvij294m93yomvh.jpg', NOW(), NOW(), 1),
('Astroworld', 2018, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544175/v9hzkkejulok8nc5f54k.jpg', NOW(), NOW(), 1),
('DAMN.', 2017, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544233/mkcawppweinq4oblcid7.jpg', NOW(), NOW(), 2),
('GNX', 2024, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544258/pdneszlm4szralrnbwo3.jpg', NOW(), NOW(), 2),
('Channel Orange', 2012, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544283/qepdf7m8w3ah5lxzkyma.jpg', NOW(), NOW(), 3),
('Blonde', 2016, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544316/fm6kdr8qmxve2ein5yqs.jpg', NOW(), NOW(), 3);
('Graduation', 2007, 'https://res.cloudinary.com/duo8nbu2l/image/upload/v1732544371/z3w5ogecsbbrsjdixbsu.jpg', NOW(''), NOW(), 4);

INSERT INTO musicas (titulo, duracao, "fileUrl", "createdAt", "updatedAt", artista_id, album_id) VALUES
('90210', 369, 'https://example.com/vaimalandra.mp3', NOW(), NOW(), 1, 1),
('Apple Pie', 219, 'https://example.com/machika.mp3', NOW(), NOW(), 1, 1),
('Antidote', 263, 'https://example.com/indecente.mp3', NOW(), NOW(), 1, 1),
('Nightcrawler', 322, 'https://example.com/simounao.mp3', NOW(), NOW(), 1, 1),
('ASTROTHUNDER', 143, 'https://example.com/nasuacara.mp3', NOW(), NOW(), 1, 2),
('CAROUSEL', 181, 'https://example.com/megusta.mp3', NOW(), NOW(), 1, 2),
('BUTTERFLY EFFECT', 191, 'https://example.com/girlfromrio.mp3', NOW(), NOW(), 1, 2),
('HOUSTONFORNICATION', 218, 'https://example.com/loco.mp3', NOW(), NOW(), 1, 2),
('DNA.', 185, 'https://example.com/topreocupada.mp3', NOW(), NOW(), 2, 3),
('Como Anaconda', 321, 'https://example.com/comoanaconda.mp3', NOW(), NOW(), 2, 3),
('Te Esperando', 123, 'https://example.com/teesperando.mp3', NOW(), NOW(), 2, 3),
('Quando a Bad Bater', 321, 'https://example.com/quandobad.mp3', NOW(), NOW(), 2, 3),
('Escreve Aí', 123, 'https://example.com/escreveai.mp3', NOW(), NOW(), 3, 5),
('Coração Cigano', 321, 'https://example.com/coracaocigano.mp3', NOW(), NOW(), 3, 5),
('Acordando o Prédio', 123, 'https://example.com/acordandoopredio.mp3', NOW(), NOW(), 3, 5),
('Meteoro', 321, 'https://example.com/meteoro.mp3', NOW(), NOW(), 3, 6),
('Tô de Cara', 123, 'https://example.com/todecara.mp3', NOW(), NOW(), 3, 6),
('Sogrão Caprichou', 321, 'https://example.com/sograocaprichou.mp3', NOW(), NOW(), 3, 6),
('Lindo, Gostoso e Carinhoso', 123, 'https://example.com/lindogostosocarinhoso.mp3', NOW(), NOW(), 3, 6),
('Te Assumi Pro Brasil', 321, 'https://example.com/teassumiprobrasil.mp3', NOW(), NOW(), 3, 6),
('Festa no Mar', 123, 'https://example.com/festanomarb.mp3', NOW(), NOW(), 3, 6),
('Abalou', 321, 'https://example.com/abalou.mp3', NOW(), NOW(), 3, 6),
('Se Eu Não Te Amasse Tanto Assim', 123, 'https://example.com/senaonteamassetantoassim.mp3', NOW(), NOW(), 3, 6),
('Sorte Grande', 321, 'https://example.com/sortegrande.mp3', NOW(), NOW(), 3, 6),
('Céu da Boca', 123, 'https://example.com/ceudaboca.mp3', NOW(), NOW(), 3, 6),
('Real Fantasia', 321, 'https://example.com/realfantasia.mp3', NOW(), NOW(), 3, 5),
('Eva', 123, 'https://example.com/eva.mp3', NOW(), NOW(), 3, 5),
('Vem Morena', 321, 'https://example.com/vemmorena.mp3', NOW(), NOW(), 3, 5),
('Deixa a Vida Me Levar', 123, 'https://example.com/deixavida.mp3', NOW(), NOW(), 3, 5),
('Aquela dos 30', 321, 'https://example.com/aquelados30.mp3', NOW(), NOW(), 3, 5);