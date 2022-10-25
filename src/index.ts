import crypto from 'crypto';

interface BlockShape {
  hash: string;
  preHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(public preHash: string, public height: number, public data: string) {
    this.hash = Block.calculateHash(preHash, height, data);
  }
  static calculateHash(preHash: string, height: number, data: string) {
    const toHash = `${preHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[]; // 원래 이렇게 위에 class 막 가져와서 쓸 수 있는 건가?
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    // private 필드는 클래스 외부나 자손 클래스에서 접근할 수 없습니다.
    if (this.blocks.length === 0) return '';
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    // public은 안 써도 된다. public은 기존 class 방식. ( 어디서든 접근 가능 )
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlock() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('Arsenal');
blockchain.addBlock('Man U');
blockchain.addBlock('Chelsea');

console.info(blockchain.getBlock());

//npm run dev 개발환경 start
