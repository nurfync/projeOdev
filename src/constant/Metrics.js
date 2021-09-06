import { Dimensions, Platform, StatusBar } from 'react-native';

// bu component uygulama içinde styling sayısal değerlerinin telefonun genişliğine yüksekliğine 
// göre ayarlanması için var 
// Ortak padding ve margin değerleri kullanılıyorsa burada sabit deperleri verilip tüm uygulama içinde de kullanılabilir.

const { width, height } = Dimensions.get('window');
const statusbarHeight = StatusBar.currentHeight;
// const marginHorizantal = width * 0.2; 

const Metrics = {
    width,
    height,
    // marginHorizantal --> Metrics.marginHorizantal şeklinde diğer dosyalarda kullanılabilir.
   
};

export default Metrics;